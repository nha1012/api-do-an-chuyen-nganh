import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AttributeValueEntity } from './attribute-value.entity';
import { AttributeValueService } from './attribute-value.service';
@UseGuards(JwtAuthGuard)
@Crud({
  model: { type: AttributeValueEntity },
  params: {
    id: {
      field: 'attributeValueId',
      primary: true,
      type: 'uuid',
    },
  },
  query: {
    join: {
      product: {},
      attributes: {},
    },
  },
})
@ApiBearerAuth('token')
@ApiTags('Attribute value')
@Controller('attribute-value')
export class AttributeValueController {
  constructor(public service: AttributeValueService) { }
}
