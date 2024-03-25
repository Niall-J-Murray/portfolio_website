function LogoLink() {
    return null;
}

export default function Project() {
    return (
        <>
            <div className={"project"}>
                <LogoLink/>
                <a href="https://slipstreamf1-production.up.railway.app/home">
                    <img src="customLogoBlack.png" alt="Slipstream F1 Logo"/>
                </a>
            </div>
        </>
    )
}
