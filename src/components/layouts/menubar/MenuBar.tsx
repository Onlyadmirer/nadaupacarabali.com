import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

function MenuBar() {
  return (
    <>
      <div className='hidden lg:block'>
        <Desktop />
      </div>
      <div className='lg:hidden'>
        <Mobile />
      </div>
    </>
  );
}

export default MenuBar;
