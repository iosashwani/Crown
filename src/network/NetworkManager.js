import axios from 'axios'

class NetworkManager {
    static networkRequest(methodType, callBackSuccess, callBackFailure = error => { }) {

        axios.get(methodType)
            .then(response => {
                callBackSuccess(response.data);
            }).catch(error => {
                callBackFailure(response.data);
            })

    }

}

export default NetworkManager



