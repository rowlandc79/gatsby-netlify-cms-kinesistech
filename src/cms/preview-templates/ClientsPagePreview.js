import React from 'react'
import PropTypes from 'prop-types'
import { ClientsPageTemplate } from '../../templates/clients-page'

const ClientsPagePreview = ({ entry, widgetFor }) => (
  <ClientsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ClientsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ClientsPagePreview
