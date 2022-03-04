import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'history_xo_game' })
export class Reply extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  size_square: string;
  @Column
  patterns: string;
  @Column
  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
