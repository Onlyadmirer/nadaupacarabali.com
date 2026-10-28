"use client";

import { useEffect, useRef, useState } from "react";
import {
  ImageIcon,
  Link2,
  Loader2,
  RefreshCw,
  UploadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const MAX_UPLOAD_MB = 4;
const ACCEPTED_TYPES =
  "image/jpeg,image/png,image/webp,image/avif,image/heic,image/heif";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  onBusyChange?: (busy: boolean) => void;
}

interface UploadResponse {
  url?: string;
  error?: string;
}

export default function ImageUploader({
  value,
  onChange,
  onBusyChange,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);
  const previewRef = useRef<string | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [showUrlField, setShowUrlField] = useState(false);

  const uploading = progress !== null;
  const displaySrc = preview ?? (value || null);

  useEffect(() => {
    return () => {
      const xhr = xhrRef.current;
      xhrRef.current = null;
      xhr?.abort();
      if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    };
  }, []);

  const clearPreview = () => {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
      previewRef.current = null;
    }
    setPreview(null);
  };

  const uploadFile = (file: File) => {
    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar.");
      return;
    }

    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      setError(`Ukuran gambar maksimal ${MAX_UPLOAD_MB} MB.`);
      return;
    }

    xhrRef.current?.abort();

    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    const objectUrl = URL.createObjectURL(file);
    previewRef.current = objectUrl;
    setPreview(objectUrl);
    setProgress(0);
    onBusyChange?.(true);

    const finish = () => {
      xhrRef.current = null;
      setProgress(null);
      onBusyChange?.(false);
    };

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;
    xhr.open("POST", "/api/admin/upload");
    xhr.responseType = "json";

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      const data = (xhr.response ?? {}) as UploadResponse;

      if (xhr.status >= 200 && xhr.status < 300 && data.url) {
        onChange(data.url);
        clearPreview();
        finish();
        return;
      }

      setError(data.error ?? "Gambar gagal diunggah. Silakan coba lagi.");
      clearPreview();
      finish();
    };

    xhr.onerror = () => {
      setError("Koneksi gagal saat mengunggah gambar.");
      clearPreview();
      finish();
    };

    xhr.onabort = () => {
      // A newer upload replaced this one; don't touch its preview or state.
      if (xhrRef.current !== xhr) return;
      clearPreview();
      finish();
    };

    xhr.send(formData);
  };

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div className='space-y-3'>
      <input
        ref={inputRef}
        type='file'
        accept={ACCEPTED_TYPES}
        className='sr-only'
        onChange={(event) => {
          handleFiles(event.target.files);
          event.target.value = "";
        }}
      />

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "relative aspect-video overflow-hidden rounded-lg bg-secondary ring-1 transition-colors",
          dragging ? "ring-2 ring-primary" : "ring-border/70",
        )}
      >
        {displaySrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={displaySrc}
            alt='Pratinjau gambar'
            className='size-full object-cover'
          />
        ) : (
          <button
            type='button'
            onClick={() => inputRef.current?.click()}
            className='flex size-full flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
          >
            <UploadCloud className='size-7' />
            <span className='font-outfit text-[11px] tracking-[0.12em] uppercase'>
              Pilih atau tarik gambar ke sini
            </span>
            <span className='font-outfit text-[10px] text-muted-foreground'>
              JPG, PNG, WebP · maks {MAX_UPLOAD_MB} MB
            </span>
          </button>
        )}

        {uploading && (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 text-white backdrop-blur-sm'>
            <Loader2 className='size-6 animate-spin' />
            <div className='h-1.5 w-32 overflow-hidden rounded-full bg-white/25'>
              <div
                className='h-full rounded-full bg-white transition-all'
                style={{ width: `${progress ?? 0}%` }}
              />
            </div>
            <span className='font-outfit text-[11px] tracking-[0.15em] uppercase'>
              Mengunggah {progress ?? 0}%
            </span>
          </div>
        )}

        {displaySrc && !uploading && (
          <div className='absolute inset-x-0 bottom-0 flex items-center justify-end gap-1.5 bg-black/45 p-2 backdrop-blur-sm'>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              onClick={() => inputRef.current?.click()}
              className='font-outfit h-8 text-[10px] tracking-[0.12em] uppercase'
            >
              <RefreshCw className='size-3.5' />
              Ganti Gambar
            </Button>
          </div>
        )}
      </div>

      {error && (
        <p className='rounded-md bg-destructive/10 px-3 py-2 font-outfit text-xs text-destructive'>
          {error}
        </p>
      )}

      <div className='flex items-center justify-between gap-2'>
        <p className='font-outfit truncate font-mono text-[11px] text-muted-foreground'>
          {value || "Belum ada gambar"}
        </p>
        <Button
          type='button'
          variant='ghost'
          size='sm'
          onClick={() => setShowUrlField((current) => !current)}
          className='font-outfit shrink-0 text-[10px] tracking-[0.12em] uppercase'
        >
          <Link2 className='size-3.5' />
          {showUrlField ? "Sembunyikan URL" : "Tempel URL"}
        </Button>
      </div>

      {showUrlField && (
        <div className='space-y-2'>
          <Label
            htmlFor='image-url'
            className='font-outfit text-[10px] tracking-[0.15em] text-muted-foreground uppercase'
          >
            URL Gambar
          </Label>
          <Input
            id='image-url'
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder='/images/catalog/gamelan.png'
          />
          <p className='font-outfit text-[11px] text-muted-foreground'>
            Path lokal (<code className='font-mono'>/images/...</code>),
            Cloudinary, atau URL Vercel Blob.
          </p>
        </div>
      )}

      {!displaySrc && !error && (
        <p className='flex items-center gap-1.5 font-outfit text-[11px] text-muted-foreground'>
          <ImageIcon className='size-3.5' />
          Gambar akan dikonversi otomatis ke WebP dan dioptimalkan.
        </p>
      )}
    </div>
  );
}
