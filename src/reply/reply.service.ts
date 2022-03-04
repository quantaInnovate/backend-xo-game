import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply } from './entities/reply.entity';
import { JsonResponse } from '../utils/httpRespose';
@Injectable()
export class ReplyService {
  create(createReplyDto: CreateReplyDto) {
    try {
      const reply = new Reply();
      reply.size_square = createReplyDto.size_square;
      reply.patterns = JSON.stringify(createReplyDto.patterns);
      reply.save();
      return JsonResponse(HttpStatus.OK, {});
    } catch (error) {
      return JsonResponse(HttpStatus.BAD_REQUEST, {});
    }
  }

  findAll() {
    return `This action returns all reply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`;
  }

  update(id: number, updateReplyDto: UpdateReplyDto) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
