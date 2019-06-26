let microShow = [];
const microShowDefault = {
    path: "/microShow/microShowDefault",
    name: "microShowDefault",
    component: () => import("../../views/microShow/MicroShowDefault.vue"),
    meta: { title: "微展示" }
}
const microShowDetails = {
    path: "/microShow/microShowDetails",
    name: "MicroShowDetails",
    component: () => import("../../views/microShow/MicroShowDetails.vue"),
    meta: { title: "微展详情页" }
}


microShow.push(microShowDefault,microShowDetails);
export { microShow };
