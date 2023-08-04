
// eslint-disable-next-line react/prop-types
function HeaderItem({name, Icon}) {
  return (
    <div className="text-white flex items-center gap-5 text-[15px] cursor-pointer font-semibold hover:underline hover:underline-offset-8 transition-all duration-300 ">
      <Icon/>
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;