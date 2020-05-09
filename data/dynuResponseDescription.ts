export interface DynuResponseDescription {
  "code": string;
  "responseCode": string;
  "description": string;
  "response"?: string;
}

export const dynuResponseDescription: DynuResponseDescription[] = [
  {
    "code": "inputError",
    "responseCode": "unknown",
    "description": "This response code is returned if an invalid [request] is made to the API server. This [response code] could be generated as a result of badly formatted parameters as well so parameters must be checked for validity by the client before they are passed along with the [request]. "
  },
  {
    "code": "ok",
    "responseCode": "good",
    "description": "This response code means that the action has been processed successfully. Further details of the action may be included along with this [response code]. "
  },
  {
    "code": "error",
    "responseCode": "badauth",
    "description": "This response code is returned in case of a failed authentication for the [request]. Please note that sending across an invalid parameter such as an unknown domain name can also result in this [response code]. The client must advise the user to check all parameters including authentication parameters to resolve this problem. "
  },
  {
    "code": "error",
    "responseCode": "servererror",
    "description": "This response code is returned in cases where an error was encountered on the server side. The client may send across the request again to have the [request] processed successfully. "
  },
  {
    "code": "ok",
    "responseCode": "nochg",
    "description": "This response code is returned in cases where IP address was found to be unchanged on the server side. "
  },
  {
    "code": "inputError",
    "responseCode": "notfqdn",
    "description": "This response code is returned in cases where the hostname is not a valid fully qualified hostname. "
  },
  {
    "code": "inputError",
    "responseCode": "numhost",
    "description": "This response code is returned in cases where too many hostnames(more than 20) are specified for the update process. "
  },
  {
    "code": "error",
    "responseCode": "abuse",
    "description": "This response code is returned in cases where update process has failed due to abusive behaviour. "
  },
  {
    "code": "inputError",
    "responseCode": "nohost",
    "description": "This response code is returned in cases where hostname/username is not found in the system. "
  },
  {
    "code": "error",
    "responseCode": "911",
    "description": "This response code is returned in cases where the update is temporarily halted due to scheduled maintenance. Client must respond by suspending update process for 10 minutes upon receiving this response code. "
  },
  {
    "code": "error",
    "responseCode": "dnserr",
    "description": "This response code is returned in cases where there was an error on the server side. The client must respond by retrying the update process. "
  },
  {
    "code": "warning",
    "responseCode": "!donator",
    "description": "This response code is returned to indicate that this functionality is only available to members. "
  }
]
