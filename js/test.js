
$(document).ready( function () {
    $('#bikedata').DataTable({
        'ajax':'./data/bikes_response.json',
        'columns':[
            {'data':'BikeID'},
            {'data':'Make'},
            {'data':'Model'},
            {'data':'Year'},
            {'data':'Displacement'},
            {'data':'Price'},
            {'data':'Terrain'},
            {'data':'Description'}
        ]
    });
} );