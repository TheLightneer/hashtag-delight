export const useMainpage = defineStore('mainpage', {
    state: () => (
        { landing: true, mainpage: false }
        ),
    getters: {
    //   doubleCount: (state) => state.count * 2,
    },
    actions: {
      triggerMainpage(){
        this.landing = !this.landing;
      },
      triggerLanding(){
        this.mainpage = !this.mainpage;
      },
    },
  })