import api from "./api";
import TokenService from "./token.service";


class DataService {
    login( phoneNumber, password ) {
        return api
            .post("/User/Login",

                {
                    "phoneNumber": phoneNumber,
                    "password": password,

                    "deviceId": "string",
                    "lang":"uz"

                }

            ).then((response) => {

                if (response.data.isSuccess) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }


    getFoodList() {
        return api
            .get("/Food" ).then((response) => {
                return response.data;
            });
    }
    
    getSpPromoCodeTypeList() {
        return api
            .get("/PromoCodeType" ).then((response) => {
                return response.data;
            });
    }

    getregion() {
        return api
            .get("/region" ).then((response) => {
                return response.data;
            });
    }

        
    getSpSmsStatus() {
        return api
            .get("/SmsStatus" ).then((response) => {
                return response.data;
            });
    }   

    getMobileAppVersion() {
        return api
            .get("/MobileAppVersion" ).then((response) => {
                return response.data;
            });
    }

    insertMobileAppVersion(data) {
        return api
            .post("/MobileAppVersion/Insert", data ).then((response) => {
                return response.data;
            });
    }

    getDistrict() {
        return api
            .get("/District" ).then((response) => {
                return response.data;
            });
    }
    
    
    getCategory() {
        return api
            .get("/Category" ).then((response) => {
                return response.data;
            });
    }
}

export default new DataService();