import { Document, Schema, model, models } from 'mongoose'

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: Record<string, any>;
    prompt?: number;
    author?: {
        _id:string;
        firstname: string;
        lastname:string;
    }; // Assuming ObjectId is stored as string
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: { type: String, require: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: Object },
    prompt: { type: Number },
    author: { type: Schema.Types.ObjectId, ref:'User' },
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
   

})

const Image = models?.Image || model('Image',ImageSchema)

export default Image;