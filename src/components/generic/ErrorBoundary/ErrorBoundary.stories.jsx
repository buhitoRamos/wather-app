import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}
const props = undefined
const ComponentWithError = () => <h1>{props.title}</h1>
const ComponentWithoutError = () => <h1>Sin error</h1>
export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError />
    </ErrorBoundary>
)
export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError />
    </ErrorBoundary>
)