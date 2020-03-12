![Tests](https://github.com/tvthatsme/visual-regression-jest/workflows/Test/badge.svg)

# Visual Regression Testing with Jest

As developers, it is our job to ensure that our users receive the same experience that our UX colleagues design and trust us to implement. So, throughout the development life of a project, how can we make sure that the visuals are always correct? You could manually click through every possible user journey and check, but there has to be a better way.

Enter automated visual regression testing. Keep an image of your component in its perfect state and compare that with the result of any code changes to ensure that no unexpected visual changes slip through unnoticed.

This is accomplished by combining jest, jest-image-snapshot, puppeteer, and docker to acheive one-to-one pixel-perfect comparisons in any environment. This repo serves as a demonstration of how to set this up for a real-life project.

Full details can be found in [this article](https://blog.logrocket.com/automated-visual-regression-testing-with-jest/).
