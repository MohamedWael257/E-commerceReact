import React from "react";
import Categories from "./slideritems/categories/Categories";
import Hotdeal from "./slideritems/hotdeal/Hotdeal"
import Fashiondigital from "./slideritems/fashiondigital/Fashiondigital";
import Featureitems from "./slideritems/featureitem/Featureitems";
function Slider() {

    return (
        <>

            <Categories />
            <Hotdeal />
            <Fashiondigital />
            <Featureitems />
        </>
    )
}
export default Slider