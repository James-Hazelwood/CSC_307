// src/Table.jsx
function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Job</th>
                <th>Delete??</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    console.log(props);
    if (!Array.isArray(props.characterData) || props.characterData.length === 0){
        return (
        <tbody>
        </tbody>
        )
    }

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(props.characterData[index])}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
    );
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

// src/Table.jsx
function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody
                characterData={props.characterData}
                removeCharacter={props.removeCharacter}
            />
        </table>
    );
}

export default Table;
