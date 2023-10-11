const GsmData = ({ user }) => {
    return (
        <>
            {
                user.map((curUser) => {
                    const { TC, GSM } = curUser;
                    return (
                        <tr>
                            <td>{TC}</td>
                            <td>{GSM}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default GsmData;