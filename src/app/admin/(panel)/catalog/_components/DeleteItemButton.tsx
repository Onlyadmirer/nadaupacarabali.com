"use client";

import { useActionState, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { initialFormState } from "@/lib/form-state";
import { deleteCatalogItem } from "../actions";

interface DeleteItemButtonProps {
  id: string;
  title: string;
}

export default function DeleteItemButton({
  id,
  title,
}: DeleteItemButtonProps) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    deleteCatalogItem,
    initialFormState,
  );

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
          aria-label={`Hapus ${title}`}
        >
          <Trash2 className='size-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus item katalog?</AlertDialogTitle>
          <AlertDialogDescription>
            <span className='font-medium text-foreground'>{title}</span> akan
            dihapus permanen beserta seluruh paket harganya. Tindakan ini tidak
            dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {state.error && (
          <p className='rounded-md bg-destructive/10 px-3 py-2 font-outfit text-sm text-destructive'>
            {state.error}
          </p>
        )}

        <form action={formAction}>
          <input type='hidden' name='id' value={id} />
          <AlertDialogFooter>
            <AlertDialogCancel type='button' disabled={pending}>
              Batal
            </AlertDialogCancel>
            <Button
              type='submit'
              variant='destructive'
              disabled={pending}
              className='font-outfit tracking-[0.1em] uppercase'
            >
              {pending ? (
                <>
                  <Loader2 className='size-4 animate-spin' />
                  Menghapus
                </>
              ) : (
                "Hapus"
              )}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
