import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AttributesEntity } from './attributes.entity';
import { AttributesService } from './attributes.service';
@UseGuards(JwtAuthGuard)
@Crud({
  model: { type: AttributesEntity },
  params: {
    id: {
      field: 'attributesId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      attributeValues: {},
    },
  },
})
@ApiBearerAuth('token')
@ApiTags('Attributes')
@Controller('attributes')
export class AttributesController {
  constructor(public service: AttributesService) { }
}
