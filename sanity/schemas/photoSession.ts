import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'photoSession',
  title: 'Photo Session',
  type: 'document',
  fields: [
    defineField({
      name: 'sessionName',
      title: 'Session Name',
      type: 'string',
      description: 'Display name for the gallery (e.g., "Smith Family - Oct 2025")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sessionId',
      title: 'Session ID',
      type: 'slug',
      description: 'URL-friendly identifier for the session',
      options: {
        source: 'sessionName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      description: 'Customer who owns this gallery',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryPassword',
      title: 'Gallery Password',
      type: 'string',
      description: 'Optional password for additional gallery protection',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'photo' }],
        },
      ],
    }),
    defineField({
      name: 'sessionDate',
      title: 'Session Date',
      type: 'date',
      description: 'Date the photo session took place',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description or notes about this session',
    }),
  ],
  preview: {
    select: {
      title: 'sessionName',
      customerName: 'customer.fullName',
      date: 'sessionDate',
      status: 'status',
    },
    prepare({ title, customerName, date, status }) {
      return {
        title: title || 'Unnamed Session',
        subtitle: `${customerName || 'No customer'} - ${date || 'No date'} - ${status}`,
      };
    },
  },
});
