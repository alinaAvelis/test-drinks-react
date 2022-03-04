
import { CollectionItem } from "../collection-item/collection-item";
import { generateId, getNewExpirationTime } from '../../utilities';
import './collection.scss';

export const Collection = () => {
    
    const cards = [
        {
            id: generateId(),
            innerText: "Водка",
            containerClass: "collection__item__container  collection__item__container--1 ",
            innerClass: "collection__item__inner  uppercase",
            btnClass: "collection__btn",
            href: "/collection/vodka",
            svgStyles: "right_arr"
        },

        {
            id: generateId(),
            innerText: "Настойка",
            containerClass: "collection__item__container  collection__item__container--2 ",
            innerClass: "collection__item__inner  uppercase",
            btnClass: "collection__btn",
            href: "/collection/nastoyka",
            svgStyles: "right_arr"
        },

        {
            id: generateId(),
            innerText: "Бальзам",
            containerClass: "collection__item__container  collection__item__container--3 ",
            innerClass: "collection__item__inner  uppercase",
            btnClass: "collection__btn",
            href: "/collection/balzam",
            svgStyles: "right_arr"
        },
    ];

    const elements = cards.map((item) => {
        return (
            <li key={item.id}>
                <CollectionItem 
                    text={item.innerText}
                    href={item.href}
                    containerClass={item.containerClass}
                    innerClass={item.innerClass}
                    btnClass={item.btnClass}
                    svgStyles={item.svgStyles}
                 />
            </li>
        )
    });

    return (
        <section className="collection">
            <ul className="collection__list list_style_type_none">
                {elements}
            </ul>
        </section>
    )
    
}