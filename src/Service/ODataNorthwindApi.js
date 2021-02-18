
const baseUrl = 'https://services.odata.org/V4/Northwind/Northwind.svc';

const ODataNorthwindApi = {
    searchOrders: (page, pageSize, customerID, orderID, productID) => {
        var skip = (page-1) * pageSize;
        var uri = `${baseUrl}/Orders?`;
        uri += `$expand=Order_Details,Customer,Shipper&$skip=${skip}&$top=${pageSize}&$count=true`;
        uri += `&$filter=contains(CustomerID, '${customerID}')`;
        if(!(orderID == null || orderID === '')) {
            uri += ` and ${orderID} eq OrderID`;
        }
        if(!(productID == null || productID ==='')){
            uri += ` and Order_Details/any(o:o/ProductID eq ${productID})`
        }

        return fetch(uri, {
            method: 'GET',
            //mode: 'no-cors',
            headers: {
                "Accept": "application/json"
            }
        });
    }
}

export default ODataNorthwindApi