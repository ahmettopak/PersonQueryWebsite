const UserData = ({ users }) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const { ADI, SOYADI, TC, BABAADI, ANNEADI, DOGUMTARIHI, NUFUSIL, NUFUSILCE, ANNETC, BABATC } = curUser;
                    return (
                        <tr>
                            <td>{ADI}</td>
                            <td>{SOYADI}</td>
                            <td>{TC}</td>
                            <td>{DOGUMTARIHI}</td>
                            <td>{NUFUSIL}</td>
                            <td>{NUFUSILCE}</td>

                            <td>{ANNEADI}</td>
                            <td>{ANNETC}</td>

                            <td>{BABAADI}</td>
                            <td>{BABATC}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;