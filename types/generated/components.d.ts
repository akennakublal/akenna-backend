import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
        'black',
        'white',
        'transparent',
      ]
    >;
    textColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
        'black',
        'white',
      ]
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsGradient extends Struct.ComponentSchema {
  collectionName: 'components_components_gradients';
  info: {
    displayName: 'gradient';
    icon: 'chartPie';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<
      ['to right', 'to left', 'to bottom', 'to top']
    >;
    endColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
      ]
    >;
    startColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
      ]
    >;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'logo';
    icon: 'picture';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'seo';
    icon: 'briefcase';
  };
  attributes: {
    metaCanonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaKeywords: Schema.Attribute.JSON;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ComponentsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'tiktok', 'amazon']
    >;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsTextSection extends Struct.ComponentSchema {
  collectionName: 'components_components_text_sections';
  info: {
    displayName: 'textSection';
    icon: 'bulletList';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
        'black',
        'white',
      ]
    >;
    cta: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.RichText;
    gradient: Schema.Attribute.Component<'components.gradient', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageDirection: Schema.Attribute.Enumeration<['left', 'right']>;
    textColor: Schema.Attribute.Enumeration<
      [
        'primaryBrown',
        'secondaryBrown',
        'primaryNude',
        'lightNude',
        'lighterNude',
        'black',
        'white',
      ]
    >;
    textLocation: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.gradient': ComponentsGradient;
      'components.logo': ComponentsLogo;
      'components.seo': ComponentsSeo;
      'components.social-link': ComponentsSocialLink;
      'components.text-section': ComponentsTextSection;
    }
  }
}
