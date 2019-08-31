import {types} from 'mobx-state-tree';
import {formatPrice} from 'utils';

const Address = types.model({
    coordinates: types.array(types.number),
    location: types.string,
});

const SubImage = types.model({url: types.string});

const Image = types.model({
    landscape_big: SubImage,
    landscape_small: SubImage,
    portrait: SubImage,
    thumb: SubImage,
    url: types.string,
});

const Price = types
    .model({
        amount: types.number,
        currency: types.string,
    })
    .views(self => ({
        format: () => {
            return formatPrice(self.amount, self.currency);
        },
    }));

const Hotel = types.model({
    address: Address,
    check_in_time: types.maybe(types.string),
    check_out_time: types.maybe(types.string),
    description: types.string,
    email: types.string,
    id: types.string,
    images: types.array(Image),
    name: types.string,
    phone: types.string,
    price: Price,
    rating: types.number,
    slug: types.string,
    web_site: types.string,
});

export default Hotel;
