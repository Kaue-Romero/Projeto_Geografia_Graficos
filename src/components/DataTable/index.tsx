function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Imigrantes</th>
                        <th>Quantidade</th>
                        <th>Porcentagem em realacao ao total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Portugueses</td>
                        <td>1.470.687</td>
                        <td>30.2%</td>
                    </tr>
                    <tr>
                        <td>Diversos</td>
                        <td>674.318</td>
                        <td>13.8%</td>
                    </tr>
                    <tr>
                        <td>Espanhóis</td>
                        <td>644.469</td>
                        <td>13.2%</td>
                    </tr>
                    <tr>
                        <td>Alemães</td>
                        <td>210.825</td>
                        <td>4.3%</td>
                    </tr>
                    <tr>
                        <td>Japoneses</td>
                        <td>190.282</td>
                        <td>3.9%</td>
                    </tr>
                    <tr>
                        <td>Russos</td>
                        <td>118.624</td>
                        <td>2.5%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;