<?php

/**
 * Themes system status messages
 */
function your_theme_status_messages(&$variables) {
  $display = $variables['display'];
  $output = '';
  $status_heading = array(
    'status' => t('Status message'),
    'error' => t('Error message'),
    'warning' => t('Warning message'),
  );
  foreach (drupal_get_messages($display) as $type => $messages) {
    $output .= "<div class=\"message--$type\" role=\"alert\">\n";
    $output .= "<div class=\"message__container\">\n";
    $output .= "<div class=\"message__icon-container\">\n";
    if (!empty($status_heading[$type])) {
      $output .= '<span class="visually-hidden">' . $status_heading[$type] . "</span>\n";
    }
    if (count($messages) > 1) {
      $output .= " <ul class=\"message__list\">\n";
      foreach ($messages as $message) {
        $output .= '  <li class="message__list-item">' . $message . "</li>\n";
      }
      $output .= " </ul>\n";
    }
    else {
      $output .= '<p class="message__text">' . reset($messages) . '</p>';
    }
    $output .= "<span class=\"message__close-button\" tabindex=\"0\">\n";
    $output .= "<span class=\"visually-hidden\">" . t('Close') . "</span>\n";
    $output .= "</span>\n";
    $output .= "</div>\n</div>\n</div>\n";
  }
  return $output;
}
