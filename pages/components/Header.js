function Header() {
    return(
        <header className="py-2 px-2 bg-emerald-700 w-full flex 
        justify-between flex-row flex-wrap">
            <div className="font-bold text-2xl text-black py-3 px-5">
                Cookie Stand Admin</div>

                <div className="px-16 m-2 flex justify-end flex-row">
                <button className="rounded bg-emerald-200 p-3 font-bold mx-2">
                    rudy</button>
                <button onClick={logoutHandler} 
                className="rounded bg-emerald-200 p-3 font-bold mx-2">
                    sign out</button>
                <button className="rounded bg-emerald-200 p-3 font-bold mx-2">
                    overview</button>
                </div>
        </header>
    )
}

export default Header