/*
import dateFormat from "dateformat";

let result = {
    executionDate : dateFormat(new Date(), "isoDateTime"),
    myIP   : 'unknown',
    status : 'noResponse',
    code   : 'error',
    msg    : 'No response !',
    desc   : 'No response !'
};

let updateResult = function(obj) {
    const result = Object.assign({}, obj);

    switch(result.status) {
        case 'unknown':
            result.code = 'inputError';
            result.desc = 'This response code is returned if an invalid [request] is made to the API server. This [response code] could be generated as a result of badly formatted parameters as well so parameters must be checked for validity by the client before they are passed along with the [request]. '
            break;
        case 'good':
            result.code = 'ok';
            result.desc = 'This response code means that the action has been processed successfully. Further details of the action may be included along with this [response code]. '
            break;
        case 'badauth':
            result.code = 'error';
            result.desc = 'This response code is returned in case of a failed authentication for the [request]. Please note that sending across an invalid parameter such as an unknown domain name can also result in this [response code]. The client must advise the user to check all parameters including authentication parameters to resolve this problem. '
            break;
        case 'servererror':
            result.code = 'error';
            result.desc = 'This response code is returned in cases where an error was encountered on the server side. The client may send across the request again to have the [request] processed successfully. '
            break;
        case 'nochg':
            result.msg = 'Nothing to change!';
            result.code = 'ok';
            result.desc = 'This response code is returned in cases where IP address was found to be unchanged on the server side. '
            break;
        case 'notfqdn':
            result.code = 'inputError';
            result.desc = 'This response code is returned in cases where the hostname is not a valid fully qualified hostname. '
            break;
        case 'numhost':
            result.code = 'inputError';
            result.desc = 'This response code is returned in cases where too many hostnames(more than 20) are specified for the update process. '
            break;
        case 'abuse':
            result.code = 'error';
            result.desc = 'This response code is returned in cases where update process has failed due to abusive behaviour. '
            break;
        case 'nohost':
            result.code = 'inputError';
            result.desc = 'This response code is returned in cases where hostname/username is not found in the system. '
            break;
        case '911':
            result.code = 'error';
            result.desc = 'This response code is returned in cases where the update is temporarily halted due to scheduled maintenance. Client must respond by suspending update process for 10 minutes upon receiving this response code. '
            break;
        case 'dnserr':
            result.code = 'error';
            result.desc = 'This response code is returned in cases where there was an error on the server side. The client must respond by retrying the update process. '
            break;
        case '!donator':
            result.code = 'warning';
            result.desc = 'This response code is returned to indicate that this functionality is only available to members. '
            break;
    }

    return result;
}

var getIpOpts = {
    method: 'GET',
    url: 'http://ipinfo.io/',
    headers: {
        accept: 'application/json'
    }
};

var updateDDNSOpts = {
    method: 'GET',
    url: 'http://api.dynu.com/nic/update',
    qs: {
        hostname: 'msddns.dynu.com',
        myip: result.myIP,
        username: 'mahmoudsalmi',
        password: '------'
    },
    headers: {}
};

request(getIpOpts, function (error, response, body) {
    if (error) {
        msg = error;
    } else {
        var ipInfo = JSON.parse(body);
        result.myIP = ipInfo.ip;
        updateDDNSOpts.qs.myip = ipInfo.ip;

        request(updateDDNSOpts, function (error, response, body) {
            if (error) {
                msg = error;
            } else {
                var splittedBody = body.split(" ");
                result.status = splittedBody[0];

                result.msg = '';
                for (var i = 1; i < splittedBody.length; i++) {
                    result.msg += (i==1)?'':' ' + splittedBody[i];
                }
                result = updateResult(result);
            }

            if (result.status === 'nochg') {
                console.log("{nochg: \""+result.executionDate+"\"}\n");
            } else {
                console.log(JSON.stringify(result, null, 2)+"\n");
            }
        });
    }
});
*/

