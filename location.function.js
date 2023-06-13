import geoip from 'geoip-lite';

const locationFunction = (req) => {

    let ip = req.ip.split(":")[3];
    let geo =  geoip.lookup(ip);

    console.log(ip);
    
    return {
        geo: geo,
        ip: ip
    };

}

export default locationFunction 