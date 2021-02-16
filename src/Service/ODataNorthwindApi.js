
const baseUrl = 'https://services.odata.org/V2/Northwind/Northwind.svc';

const ODataNorthwindApi = {
    searchOrders: (page, pageSize, customerID, orderID) => {
        var skip = (page-1) * pageSize;
        var uri = `https://cors-anywhere.herokuapp.com/${baseUrl}/Orders?`;
        uri += `$format=json&$expand=Order_Details,Customer,Shipper&$skip=${skip}&$top=${pageSize}&$inlinecount=allpages`;
        uri += `&$filter=substringof('${customerID}',CustomerID) eq true`;
        if(!(orderID == null || orderID === '')) {
            uri += ` and ${orderID} eq OrderID`;
        }

        return fetch(uri, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*' 
            }
        });
    }
}

export default ODataNorthwindApi