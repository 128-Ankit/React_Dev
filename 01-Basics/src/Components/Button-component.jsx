const Button_component = () => {
    return ( 
        <>
        <h1>This is button</h1>
       <div className="flex gap-5 flex-col w-40 p-2 m-10 text-white font-medium">
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
            <button className="border-dashed border-2 border-sky-500 bg-slate-600">Click me!</button>
       </div>
        </>
    );
}
export default Button_component;