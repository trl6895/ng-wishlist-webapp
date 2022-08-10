import mongoose from 'mongoose';

export const gameSchema = new mongoose.Schema({
    img_url: String,
    date: String,
    developer: String,
    publisher: String,
    full_desc: Object,
    requirements: Object,
    popu_tags: [String],
    price: Number,
    url_info: Object,
    name: { type: String,
        required: 'Enter the Game Title' },
    categories: [String],
    wishlisted: { type: Boolean,
        default: false }
},
{
    collection: "games"
}); 