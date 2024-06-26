export default function NotFound404() {
  return (
    <div className="flex flex-col h-screen">
      <div className="pt-[132px] h-full flex flex-col justify-center items-center">
        <h1 className="text-[100px] text-stone-500">404</h1>
        <p className="text-2xl text-stone-500">
          The requested page does not exist.
        </p>
      </div>
    </div>
  );
}
