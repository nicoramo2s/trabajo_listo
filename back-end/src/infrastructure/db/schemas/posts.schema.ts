import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Services } from 'src/common/interfaces/services.interface';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: Array, required: true })
  services: Services[];

  @Prop({ type: String, required: true })
  nameProfessional: string;

  @Prop({ type: Number })
  views: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  idProfessional: object;
}

export const PostSchema = SchemaFactory.createForClass(Post);
