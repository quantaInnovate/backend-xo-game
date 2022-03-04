export class CreateReplyDto {
  size_square: string;
  patterns: string;
  constructor(size_square: string, patterns: string) {
    this.size_square = size_square;
    this.patterns = patterns;
  }
}
