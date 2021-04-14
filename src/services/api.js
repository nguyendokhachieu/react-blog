import axios from "axios";
import * as constants from "./../constants";

export const api = {
    call: function() {
      return axios.create({
        baseURL: constants.BASE_URL
      });
    }
  }
