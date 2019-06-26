let microFourm = [];
const microFourmDefault = {
    path: "/microFourm/microFourmDefault",
    name: "microFourmDefault",
    component: () => import("../../views/microFourm/MicroFourmDefault.vue"),
    meta: { title: "微论坛" }
}
microFourm.push(microFourmDefault);

export { microFourm };
