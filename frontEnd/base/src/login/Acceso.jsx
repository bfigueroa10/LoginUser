import { Contenedor, ContendorLateral, InputLogin, AccessButton } from "../components/componetStyle";

export default function Acceso() {

    return (
        <div>
            <Contenedor>

                <ContendorLateral>
                    {/* Puedes colocar aquí algún diseño o imagen decorativa */}
                </ContendorLateral>

                <div>
                    <h1 style={{
                        fontFamily: "Comic Sans MS",
                        fontSize: "26px",
                        textAlign: "center",
                        marginBottom: "30px",
                        marginLeft: "220px"
                    }}>
                        Control de acceso
                    </h1>

                </div>
                <form>
                    <div>
                        <InputLogin type="text" placeholder="Usuario" />
                        <div style={{ textAlign: "right", marginBottom: "12px" }}>
                            <a href="#" style={{ color: "#6366f1", fontSize: "14px", textDecoration: "none" }}>
                                ¿Has olvidado tu usuario?
                            </a>
                        </div>
                    </div>
                    <div>
                        <InputLogin type="password" placeholder="Contraseña" />
                        <div style={{ textAlign: "right", marginBottom: "20px" }}>
                            <a href="#" style={{ color: "#6366f1", fontSize: "14px", textDecoration: "none" }}>
                                ¿Has olvidado tu contraseña?
                            </a>
                        </div>
                    </div>

                    <AccessButton type="submit">
                        Acceso
                    </AccessButton>
                </form>
            </Contenedor>
        </div>
    );
}

