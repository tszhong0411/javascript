import type { ProfileSectionId } from '@clerk/types';

import type { LocalizationKey } from '../customizables';
import { Col, descriptors, Flex, Text } from '../customizables';
import type { ElementDescriptor, ElementId } from '../customizables/elementDescriptors';
import type { PropsOfComponent } from '../styledSystem';

type ProfileSectionProps = Omit<PropsOfComponent<typeof Flex>, 'title'> & {
  title: LocalizationKey;
  subtitle?: LocalizationKey;
  id: ProfileSectionId;
};

export const ProfileSection = (props: ProfileSectionProps) => {
  const { title, children, id, subtitle, ...rest } = props;
  return (
    <Col
      elementDescriptor={descriptors.profileSection}
      elementId={descriptors.profileSection.setId(id)}
      {...rest}
      gap={2}
    >
      <SectionHeader
        localizationKey={title}
        elementDescriptor={descriptors.profileSectionTitle}
        elementId={descriptors.profileSectionTitle.setId(id)}
        textElementDescriptor={descriptors.profileSectionTitleText}
        textElementId={descriptors.profileSectionTitleText.setId(id)}
      />
      {subtitle && (
        <SectionSubHeader
          localizationKey={subtitle}
          elementDescriptor={descriptors.profileSectionSubtitle}
          elementId={descriptors.profileSectionSubtitle.setId(id)}
          textElementDescriptor={descriptors.profileSectionSubtitleText}
          textElementId={descriptors.profileSectionSubtitleText.setId(id)}
        />
      )}
      <Col
        elementDescriptor={descriptors.profileSectionContent}
        elementId={descriptors.profileSectionContent.setId(id)}
        gap={2}
      >
        {children}
      </Col>
    </Col>
  );
};

type SectionHeaderProps = PropsOfComponent<typeof Flex> & {
  localizationKey: LocalizationKey;
  textElementDescriptor?: ElementDescriptor;
  textElementId?: ElementId;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const { textElementDescriptor, textElementId, localizationKey, ...rest } = props;
  return (
    <Flex
      {...rest}
      sx={theme => ({ borderBottom: `${theme.borders.$normal} ${theme.colors.$blackAlpha100}` })}
    >
      <Text
        localizationKey={localizationKey}
        variant='largeMedium'
        elementDescriptor={textElementDescriptor}
        elementId={textElementId}
      />
    </Flex>
  );
};
export const SectionSubHeader = (props: SectionHeaderProps) => {
  const { textElementDescriptor, textElementId, localizationKey, ...rest } = props;
  return (
    <Flex
      {...rest}
      sx={t => ({ padding: `${t.space.$2} ${t.space.$none}` })}
    >
      <Text
        localizationKey={localizationKey}
        variant='regularRegular'
        colorScheme='neutral'
        elementDescriptor={textElementDescriptor}
        elementId={textElementId}
      />
    </Flex>
  );
};
