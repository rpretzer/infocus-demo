import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title or caption for the photo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional detailed description',
    }),
    defineField({
      name: 'session',
      title: 'Photo Session',
      type: 'reference',
      to: [{ type: 'photoSession' }],
      description: 'Which session this photo belongs to (for customer galleries)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category for public gallery filtering',
      options: {
        list: [
          { title: 'Weddings', value: 'Weddings' },
          { title: 'Portraits', value: 'Portraits' },
          { title: 'Events', value: 'Events' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'publicGallery',
      title: 'Public Gallery',
      type: 'boolean',
      description: 'Display in public portfolio gallery?',
      initialValue: false,
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      description: 'Pricing for different product options',
      fields: [
        {
          name: 'digital',
          type: 'number',
          title: 'Digital Download',
          description: 'Price for high-resolution digital download',
          initialValue: 25,
        },
        {
          name: 'print4x6',
          type: 'number',
          title: '4x6 Print',
          initialValue: 15,
        },
        {
          name: 'print5x7',
          type: 'number',
          title: '5x7 Print',
          initialValue: 20,
        },
        {
          name: 'print8x10',
          type: 'number',
          title: '8x10 Print',
          initialValue: 30,
        },
        {
          name: 'print11x14',
          type: 'number',
          title: '11x14 Print',
          initialValue: 45,
        },
        {
          name: 'framed8x10',
          type: 'number',
          title: '8x10 Framed Print',
          initialValue: 75,
        },
        {
          name: 'framed11x14',
          type: 'number',
          title: '11x14 Framed Print',
          initialValue: 95,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      session: 'session.sessionName',
      category: 'category',
    },
    prepare({ title, media, session, category }) {
      return {
        title: title || 'Untitled Photo',
        subtitle: session ? `Session: ${session}` : `Category: ${category || 'Uncategorized'}`,
        media,
      };
    },
  },
});
