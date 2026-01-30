import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'The name of your photography business',
      initialValue: 'Jodi Photography',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short tagline or slogan',
      initialValue: 'Capturing Life\'s Beautiful Moments',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Default meta description for SEO',
      initialValue: 'Professional photography services capturing your most cherished moments.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
      initialValue: 'ifwjodi@gmail.com',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '(216) 570-9811',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram URL',
        },
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook URL',
        },
        {
          name: 'pinterest',
          type: 'url',
          title: 'Pinterest URL',
        },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {
          name: 'weekdays',
          type: 'string',
          title: 'Monday - Friday',
          initialValue: '9:00 AM - 6:00 PM',
        },
        {
          name: 'saturday',
          type: 'string',
          title: 'Saturday',
          initialValue: '10:00 AM - 4:00 PM',
        },
        {
          name: 'sunday',
          type: 'string',
          title: 'Sunday',
          initialValue: 'By Appointment',
        },
      ],
    }),
    defineField({
      name: 'web3formsKey',
      title: 'Web3Forms Access Key',
      type: 'string',
      description: 'Access key for form submissions',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration',
      };
    },
  },
});
