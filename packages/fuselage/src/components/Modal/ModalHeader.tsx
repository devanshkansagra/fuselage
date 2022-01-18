import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';
import Margins from '../Margins';

export type ModalHeaderProps = ComponentProps<typeof Box>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  ...props
}: ModalHeaderProps) => (
  <Box rcx-modal__header is='header' {...props}>
    <Box rcx-modal__header-inner>
      <Margins all='x8'>{children}</Margins>
    </Box>
  </Box>
);