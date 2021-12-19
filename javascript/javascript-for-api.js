rj_id =29 ;
hr_id =12 ;
mh_id =21 ;
 async function state_button(id) {
        const url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+id ;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        //console.log(data.districts);
        const district = data.districts;
        document.getElementById('districts').innerHTML =`
        <div class="container">
            <h1>Districts</h1><br>
            <table class="table">
                <tr>
                    <th>name</th>
                    <th>id</th>
                    <th>link</th>
                </tr>
            ${district.map(function(dist){
                return `
                <div>
                    <tr>
                        <td>${dist.district_name}</td>
                        <td>${dist.district_id}</td>
                        <td> <a class="btn btn-primary" id="mh"  onclick="district_button(${dist.district_id}) " href="#details">district selection</a></td>
                    </tr>
                <div>
                `
            }).join('')}
            </table>
        </div>
        `
};
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

async function district_button(id)
{
    const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+id+"&date="+date;
    const response = await fetch(url);
    const data = await response.json();
    const details = data.sessions ;
    console.log(details)
    document.getElementById("details").innerHTML = `
    <h1>Details</div>
    <div class="container">
    <h1>Districts</h1><br>
    <table class="table">
        <tr>
            <th>center-id</th>
            <th>block-name</th>
            <th>name</th>
            <th>pincode</th>
            <th>fee</th>
            <th>from</th>
            <th>to</th>
            <th>date</date>
            <th>available capacity</th>
            <th>dose1</th>
            <th>dose2</th>
            <th>min-age</th>
        </tr>
        ${details.map(function(detail){
            return `
            <div>
                <tr>
                    <td>${detail.center_id}</td>
                    <td>${detail.block_name}</td>
                    <td>${detail.name}</td>
                    <td>${detail.pincode}</td>
                    <td>${detail.fee}</td>
                    <td>${detail.from}</td>
                    <td>${detail.to}</td>
                    <td>${detail.date}</td>
                    <td>${detail.available_capacity}</td>
                    <td>${detail.available_capacity_dose1}</td>
                    <td>${detail.available_capacity_dose2}</td>
                    <td>${detail.min_age_limit}</td>
                </tr>
            <div>
            `
        }).join('')}
        </table>
    ` 
}
