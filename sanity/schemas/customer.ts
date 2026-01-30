import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
      description: 'Unique identifier for customer login',
      validation: (Rule) => Rule.required().regex(/^[a-zA-Z0-9-_]+$/,{
        name: 'alphanumeric',
        invert: false
      }).error('Customer ID must be alphanumeric'),
    }),
    defineField({
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string',
      description: 'Bcrypt hashed password (managed via custom tool)',
      hidden: true,
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street Address' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'state', type: 'string', title: 'State/Province' },
        { name: 'postalCode', type: 'string', title: 'Postal Code' },
        { name: 'country', type: 'string', title: 'Country' },
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
      customerId: 'customerId',
    },
    prepare({ title, subtitle, customerId }) {
      return {
        title: title || 'Unnamed Customer',
        subtitle: `${customerId} - ${subtitle}`,
      };
    },
  },
});
