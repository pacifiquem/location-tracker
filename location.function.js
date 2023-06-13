import geoip from 'geoip-lite';

const locationFunction = (req) => {

    console.log(req.ip);

    let geo =  geoip.lookup(req.ip);
    
    return {
        geo: geo,
        ip: req.ip
    };

}

export default locationFunction 