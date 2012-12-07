<?php
namespace Blog\Form;

use Zend\Form\Form;

class BlogForm extends Form
{
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('blog');

        $this->setAttribute('method', 'post');
        $this->add(array(
            'name' => 'id',
            'attributes' => array(
                'type'  => 'hidden',
            ),
        ));

        $this->add(array(
            'name' => 'lead',
            'attributes' => array(
                'type'  => 'textarea',
                'class' => 'textarea-small',
            ),
            'options' => array(
                'label' => 'Lead',
            ),
        ));
        
        
        $this->add(array(
            'name' => 'content',
            'attributes' => array(
                'type'  => 'textarea',
                'class' => 'textarea-large',
            ),
            'options' => array(
                'label' => 'Content',
            ),
        ));


        $this->add(array(
            'name' => 'title',
            'attributes' => array(
                'type'  => 'text',
                'class' => 'input_large',
            
            ),
            'options' => array(
                'label' => 'Title',
            ),
        ));
        
        $this->add( array(
            'type' => 'Zend\Form\Element\Radio',
            'name' => 'activepost',
            'options' => array(
                'value_options' => array(
                    '1' => 'Visible',
                    '0' => 'Hide',
                ),
                'label' => 'Visibility',
            ),
        ) );
/*
        $this->add(array(
                'type' => 'Zend\Form\Element\Checkbox',
                'name' => 'activepost',
                'useHiddenElement' => false,
                'options' => array(
                    'label' => 'Active',
                    'checkedValue'   => false,
                    'uncheckedValue' => true,
                ),
                
            
        ));
        
        */
        $this->add(array(
            'name' => 'badge',
            'attributes' => array(
                'type'  => 'text',
                'class' => 'input_large',
            
            ),
            'options' => array(
                'label' => 'Badge',
            ),
        ));

        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type'  => 'submit',
                'value' => 'Go',
                'id' => 'submitbutton',
            ),
        ));

    }
}