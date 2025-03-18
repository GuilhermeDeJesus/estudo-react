export default function Title(props) {
  return (
    <h2 className="text-3xl text-slate-100 font-bold text-center">
      {props.children}
    </h2>
  );
}
