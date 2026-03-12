#!/usr/bin/env node

/**
 * Build script for production
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = 'dist';
const SRC_DIR = 'src';
const PUBLIC_DIR = 'public';

console.log('🚀 Starting build process...\n');

// Create build directory
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
  console.log('✓ Created dist directory');
}

// Copy public files
const copyPublicFiles = () => {
  if (fs.existsSync(PUBLIC_DIR)) {
    const files = fs.readdirSync(PUBLIC_DIR);
    files.forEach((file) => {
      const srcPath = path.join(PUBLIC_DIR, file);
      const destPath = path.join(BUILD_DIR, file);
      fs.copyFileSync(srcPath, destPath);
    });
    console.log('✓ Copied public files');
  }
};

// Copy source files
const copySrcFiles = () => {
  const copyRecursive = (src, dest) => {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    entries.forEach((entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  };

  if (fs.existsSync(SRC_DIR)) {
    copyRecursive(SRC_DIR, path.join(BUILD_DIR, 'src'));
    console.log('✓ Copied source files');
  }
};

// Run build
try {
  copyPublicFiles();
  copySrcFiles();
  console.log('\n✅ Build completed successfully!');
  console.log(`📦 Build output: ${BUILD_DIR}/\n`);
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
