import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop()
  authorName: string;

  @Prop()
  title: number;

  @Prop()
  contents: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
