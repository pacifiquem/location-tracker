import geoip from 'geoip-lite';

const locationFunction = (req) => {

    console.log(req.ip);

    let ip = req.ip.split(":")[3];
    let geo =  geoip.lookup(ip);
    
    return {
        geo: geo,
        ip: ip
    };

}

export default locationFunction 