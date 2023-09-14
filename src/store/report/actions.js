import {
  REQUEST_REPORTLIST_TO_SPRING
} from "./mutation-types"
import axiosInst from "@/utility/axiosInst"

export default {
  requestReportAccountAndPlaylistAndSongToSpring({ }, payload) {
    const { reportedCategoryType, reportContent, reportedId } = payload
    const userToken = localStorage.getItem("userToken")
    console.log(reportedId)

    return axiosInst.springAxiosInst.post("/report/register-report", { reportedCategoryType, reportContent, reportedId }, { headers: { Authorization: userToken } })
      .then((res) => {
        return res.data
      })
  },

  async requestReportListToSpring({ commit }, payload = {}) {
    const userToken = localStorage.getItem('userToken');
    const { pageNum = 1 } = payload;
        return axiosInst.springAxiosInst.get(`/admin-report/list?page=${pageNum}`, { headers: { Authorization: userToken } }).then((res) => {
          commit(REQUEST_REPORTLIST_TO_SPRING, res.data);
        });
  },
}